"use client";

import type { Control } from "react-hook-form";
import { E164Number } from "libphonenumber-js/core";
import "react-phone-number-input/style.css";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldTypes } from "./forms/PatientForm";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";

interface CustomFormFieldProps {
  control: Control<any>;
  fieldType: FormFieldTypes;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({
  field,
  props,
}: {
  field: any;
  props: CustomFormFieldProps;
}) => {
  switch (props.fieldType) {
    case FormFieldTypes.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {props.iconSrc && (
            <div className="flex items-center justify-center pl-2">
              <Image
                src={props.iconSrc}
                alt={props.iconAlt || "icon"}
                className="ml-2"
                width={24}
                height={24}
              />
            </div>
          )}
          <FormControl>
            <Input
              {...field}
              placeholder={props.placeholder}
              disabled={props.disabled}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );

    case FormFieldTypes.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="RW"
            onChange={field.onChange}
            placeholder={props.placeholder}
            className='input-phone'
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
          />
        </FormControl>
      );
    default:
      break;
  }
};

const CustomFormField = (props: CustomFormFieldProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldTypes.CHECKBOX && label && (
            <FormLabel htmlFor={name}>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
