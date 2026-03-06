import FormRow from "../common/FormRow";
import { motion } from "framer-motion";
import Input from "../common/Input";
import RadioGroup from "../common/Radio";
import SubLabelRow from "../common/SubLevelRow";
import Select from "../common/Select";
import FormHero from "../common/FormHero";
import CheckBox from "../common/CheckBox";
import TextArea from "../common/TextArea";
import { useForm } from "react-hook-form";

export const Prayer = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
   
    try {

      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/prayer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Prayer request submitted successfully!");
        reset();
      } else {
        alert("Error - " + result.message);
      }

    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section>

      <FormHero
        img={"/prayerHeader1.jpeg"}
        className="h-[120px] md:h-[290px]"
        text="Prayer Request"
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
                {...register("phone", {
                  required: "Phone number is required",
                })}
              />
            </FormRow>

          </div>


          {/* MEMBERSHIP CLASS */}

          <FormRow
            label="Have you completed your membership class?"
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


          {/* CONTACT METHOD */}

          <FormRow
            label="Preferred Method of Contact"
            required
            error={errors.contactMethod?.message}
          >
            <CheckBox
              options={["Phone Call", "WhatsApp", "Email"]}
              name="contactMethod"
              register={register}
              style="flex-col"
            />
          </FormRow>


          {/* PRAYER TYPE */}

          <FormRow
            label="Prayer Request Type"
            required
            error={errors.prayerType?.message}
          >
            <Select
              options={[
                "Healing",
                "Family",
                "Financial Breakthrough",
                "Guidance",
                "Deliverance",
              ]}
              name="prayerType"
              register={register}
            />
          </FormRow>


          {/* TEXT AREA */}

          <FormRow
            label="Your Prayer Request"
            required
            error={errors.prayerRequest?.message}
          >
            <TextArea
              {...register("prayerRequest", {
                required: "Prayer request is required",
              })}
            />
          </FormRow>


          {/* CONFIDENTIAL */}

          <FormRow
            label="Keep this request confidential?"
            required
            error={errors.confidential?.message}
          >
            <RadioGroup
              options={["Yes", "No"]}
              name="confidential"
              register={register}
              style="flex-col"
            />
          </FormRow>


          {/* SUBMIT */}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
            SUBMIT
          </motion.button>

        </motion.form>

      </div>
    </section>
  );
};