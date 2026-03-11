import FormRow from "../common/FormRow";
import { motion } from "framer-motion";
import Input from "../common/Input";
import RadioGroup from "../common/Radio";
import SubLabelRow from "../common/SubLevelRow";
import Select from "../common/Select";
import FormHero from "../common/FormHero";
import { useForm } from "react-hook-form";
import useSubmitForm from "../../hooks/useSubmitForm";


export const Members = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  

  const { submitForm, loading } = useSubmitForm();
  const onSubmit = (data: any) => {
    submitForm(data, reset, {
      endpoint: "/members",
      successMessage: "Member registered successfully!",
    });
  };

  

  return (
    <section>
      <FormHero
        img={"/memberHeader1.png"}
        className="h-[120px] md:h-[290px]"
        text="Membership Form"
      />

      <div className="min-h-screen lato flex justify-center py-10 px-4">
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-2xl"
        >
          <h2 className="text-center text-blue-900 font-semibold text-lg mb-8">
            Please provide your details
          </h2>

          {/* NAME */}

          <FormRow label="Name" required>
            <div className="grid grid-cols-2 gap-4">
              <FormRow label="" error={errors.firstName?.message}>
                <Input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
              </FormRow>

              <FormRow label="" error={errors.lastName?.message}>
                <Input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
              </FormRow>
            </div>

            <SubLabelRow labels={["First Name", "Last Name"]} />
          </FormRow>

          {/* EMAIL + PHONE */}

          <div className="grid md:grid-cols-2 gap-4">
            <FormRow label="Email" required error={errors.email?.message}>
              <Input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </FormRow>

            <FormRow label="Phone" required error={errors.phone?.message}>

              <Input
                placeholder="08155678633"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+]+$/, 
                      message: "Please enter a valid phone number",
                    },
                    minLength: {
                      value: 10,
                      message: "Phone number is too short",
                    },
                  })}
                  type="tel" 
                />
           
            </FormRow>
          </div>

          {/* LOCATION + BIRTHDAY */}

          <div className="grid md:grid-cols-2 gap-4">
            <FormRow label="Location" required>
              <div className="grid grid-cols-2 gap-4">
                <FormRow label="" error={errors.city?.message}>
                  <Input
                    {...register("city", {
                      required: "City is required",
                    })}
                  />
                </FormRow>

                <FormRow label="" error={errors.state?.message}>
                  <Input
                    {...register("state", {
                      required: "State is required",
                    })}
                  />
                </FormRow>
              </div>

              <SubLabelRow labels={["City", "State / Province / Region"]} />
            </FormRow>

            <FormRow label="Birthday" required error={errors.birthday?.message}>
              <Input
                type="date"
                {...register("birthday", {
                  required: "Birthday is required",
                })}
              />
            </FormRow>
          </div>

          {/* AGE RANGE */}

          <FormRow label="Age Range" required error={errors.ageRange?.message}>
            <Select
              options={["Under 18", "18-25", "26-35", "36-45"]}
              name="ageRange"
              register={register}
            />
          </FormRow>

          {/* GENDER */}

          <FormRow label="Gender" required error={errors.gender?.message}>
            <RadioGroup
              options={["Male", "Female"]}
              name="gender"
              register={register}
              style="flex-col"
            />
          </FormRow>

          {/* MARITAL + EMPLOYMENT */}

          <div className="grid grid-cols-2 gap-4">
            <FormRow
              label="Marital Status"
              required
              error={errors.maritalStatus?.message}
            >
              <Input
                {...register("maritalStatus", {
                  required: "Marital status is required",
                })}
              />
            </FormRow>

            <FormRow
              label="Employment Status"
              required
              error={errors.employmentStatus?.message}
            >
              <Input
                {...register("employmentStatus", {
                  required: "Employment status is required",
                })}
              />
            </FormRow>
          </div>

          {/* MEMBERSHIP CLASS */}

          <FormRow
            label="Have you completed Membership Class?"
            required
            error={errors.membershipClass?.message}
          >
            <RadioGroup
              options={["Yes", "No"]}
              name="membershipClass"
              register={register}
              style="flex"
            />
          </FormRow>

          {/* SUBMIT */}

                <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="
              w-full mt-8 py-3
              bg-red-600 text-white font-semibold
              rounded-md
              shadow-sm
              transition-all duration-200
              hover:bg-red-700
              cursor-pointer
            "
          >
           
             {loading ? "Submitting..." : " SUBMIT"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};
