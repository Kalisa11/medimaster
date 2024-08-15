'use server';

import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";
import { showErrorToast } from "../toasters";

export const createUser = async (user: CreateUserParams) => {
  try {
    const document = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log({ document });
    return parseStringify(document);
  } catch (error: any) {
    // If user already exists, return the existing user
    if (error && error.code === 409) {
      const documents = await users.list([Query.equal("email", user.email)]);
      return documents?.users[0];
    }
    showErrorToast(`Oops! Something went wrong.\n ${error.message}`);
    console.error(error.message);
  }
};
