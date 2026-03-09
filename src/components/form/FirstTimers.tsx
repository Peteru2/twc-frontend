import FormRow from "../common/FormRow";
import { motion } from "framer-motion";
import Input from "../common/Input";
import RadioGroup from "../common/Radio";
import SubLabelRow from "../common/SubLevelRow";
import FormHero from "../common/FormHero";
import { useForm } from "react-hook-form";
import useSubmitForm from "../../hooks/useSubmitForm";


export const FirstTimers = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { submitForm, loading } = useSubmitForm();
  const onSubmit = (data: any) => {
    submitForm(data, reset, {
      endpoint: "/first-timer",
      successMessage: "Details submitted successfully!",
    });
  };

  

  return (
    <section>

      <FormHero
        img={"/firstTimerHeader1.jpeg"}
        className="h-[120px] md:h-[290px]"
        text="Welcome to True Worshippers Church"
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

              <FormRow label= ""error={errors.firstName?.message}>
                <Input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
              </FormRow>

              <FormRow label = "" error={errors.lastName?.message}>
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

          <div className="grid md:grid-cols-2 md:gap-4">

            <FormRow label="Email" required error={errors.email?.message}>
              <Input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </FormRow>

            <FormRow label="Phone" required error={errors.phone?.message}>
              <Input
                {...register("phone", {
                  required: "Phone number is required",
                })}
              />
            </FormRow>

          </div>


          {/* MEMBERSHIP */}

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


          {/* GENDER */}

          <FormRow
            label="Gender"
            required
            error={errors.gender?.message}
          >
            <RadioGroup
              options={["Male", "Female"]}
              name="gender"
              register={register}
              style="flex-col"
            />
          </FormRow>


          {/* ADDRESS */}

          <FormRow label="Address" required>

            <FormRow  label="" error={errors.street?.message}>
              <Input
                {...register("street", {
                  required: "Street address is required",
                })}
              />
            </FormRow>

            <SubLabelRow labels={["Street Address"]} />

            <div className="grid grid-cols-2 mt-2 gap-4">

              <FormRow label="" error={errors.state?.message}>
                <Input
                  {...register("state", {
                    required: "State is required",
                  })}
                />
              </FormRow>

              <FormRow  label=""error={errors.country?.message}>
                <Input
                  {...register("country", {
                    required: "Country is required",
                  })}
                />
              </FormRow>

            </div>

            <SubLabelRow labels={["State / Province / Region", "Country"]} />

          </FormRow>


          {/* OTHERS */}

          <div className="grid md:grid-cols-2 gap-4">

            <FormRow
              label="Are you born again?"
              required
              error={errors.bornAgain?.message}
            >
              <RadioGroup
                options={["Yes", "No", "Not Sure"]}
                name="bornAgain"
                register={register}
                style="flex-col"
              />
            </FormRow>

            <FormRow
              label="How did you hear about us?"
              required
              error={errors.hearAboutUs?.message}
            >
              <RadioGroup
                options={["Friend / Family", "Online Search", "Others"]}
                name="hearAboutUs"
                register={register}
                style="flex-col"
              />
            </FormRow>

          </div>


          {/* CONTACT */}

          <FormRow
            label="Would you like someone to contact you?"
            required
            error={errors.contact?.message}
          >
            <RadioGroup
              options={["Yes", "No"]}
              name="contact"
              register={register}
              style="flex-col"
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