"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required",
    );
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    return encodedRedirect(
      "success",
      "/sign-up",
      "Thanks for signing up! Please check your email for a verification link.",
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/reset-password", "Password updated");
};

export const updateProfileAction = async (formData: FormData) => {
  const supabase = await createClient();
  const displayName = formData.get('name') as string;

  if (!displayName) {
    encodedRedirect(
      "error",
      "/welcome",
      "Display name missing",
    );
  }

  const { error } = await supabase.auth.updateUser({
    data: {
      displayName,
    },
  });

  if (error) {
    encodedRedirect(
      "error",
      "/welcome",
      error.message,
    );
  }
  const supabase2 = await createClient();
  const { data: userData } = await supabase2.auth.getUser();

  if (userData?.user) {
    const { id } = userData?.user;
    const organizationName = formData.get('orgName') as string;
    const description = formData.get('description') as string;
    const organizationData = [
      {
        name: organizationName,
        description,
        owner: id
      },
    ];

    const { data: orgData, error: orgError } = await supabase
      .from('organization')
      .insert(organizationData)
      .select()
      .single();

    if (orgError) {
      encodedRedirect(
        "error",
        "/welcome",
        orgError.message,
      );
    }
    console.log(orgData);
    if (orgData?.id) {
      const { data: memberData, error: memberError } = await supabase
        .from('members')
        .insert({
          user_id: id,
          organization_id: orgData.id,
        })
        .select();
      console.log(memberData);
      if (memberError) {
        encodedRedirect(
          "error",
          "/welcome",
          memberError.message,
        );
      }
    }

    encodedRedirect("success", "/dashboard", "");
  }
}

export const getUserData = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    encodedRedirect(
      "error",
      "/not-found",
      error.message,
    );
  }

  return data;
}

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
