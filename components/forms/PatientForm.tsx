"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { userFormSchema } from "@/lib/validation";

export enum FormFieldTypes {
  INPUT = "input",
  TEXTAREA = "textarea",
  RADIO = "radio",
  CHECKBOX = "checkbox",
  PHONE_INPUT = "phoneInput",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof userFormSchema>) {
    try {
      // TODO: Handle form submission
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋🏽</h1>
          <p className="text-dark-700">
            Welcome to MediMaster! Schedule your appointment now.
          </p>
        </section>
        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="example@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldTypes.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="+1 (555) 555-5555"
        />
        <SubmitButton isLoading={form.formState.isSubmitting}>
          Get Started
        </SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
