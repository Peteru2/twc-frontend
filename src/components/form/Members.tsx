
import FormRow from "../common/FormRow";
import { motion } from "framer-motion";
import Input from "../common/Input";
import RadioGroup from "../common/Radio";
import SubLabelRow from "../common/SubLevelRow";
import Select from "../common/Select";

export const Members = () => {
  return (
    <div className="min-h-screen lato  flex justify-center py-10 px-4">
      <motion.div
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
            <Input placeholder="" />
            <Input placeholder="" />
          </div>
          <SubLabelRow labels={["First Name", "Last Name"]} />
        </FormRow>

        {/* EMAIL + PHONE */}
        <div className="grid md:grid-cols-2 gap-4">
          <FormRow label="Email" required>
            <Input />
          </FormRow>

          <FormRow label="Phone" required>
            <Input placeholder="605-245-5499" />
          </FormRow>
        </div>

        {/* LOCATION + BIRTHDAY */}
        <div className="grid md:grid-cols-2 gap-4">
          <FormRow label="Location" required>
            <div className="grid grid-cols-2 gap-4">
              <Input />
              <Input />
            </div>
            <SubLabelRow labels={["City", "State / Province / Region"]} />
          </FormRow>

          <FormRow label="Birthday" required>
            <Input type="date" />
          </FormRow>
        </div>

        {/* AGE RANGE */}
        <FormRow label="Age Range" required >
          <Select />
        </FormRow>

        {/* GENDER */}
        <FormRow label="Gender" required >
          <RadioGroup options={["Male", "Female"]} style="flex-col"/>
        </FormRow>

        {/* MARITAL + EMPLOYMENT */}
        <div className="grid grid-cols-2 gap-4">
          <FormRow label="Marital Status" required>
            <Input />
          </FormRow>

          <FormRow label="Employment Status" required>
            <Input />
          </FormRow>
        </div>

        {/* MEMBERSHIP */}
        <FormRow
          label="Have you completed Membership Class?"
          required
  
        >
          <RadioGroup options={["Yes", "No"]} style="flex" />
        </FormRow>

        {/* SUBMIT */}
        <motion.button
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
      </motion.div>
    </div>
  );
};