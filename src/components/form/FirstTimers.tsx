
import FormRow from "../common/FormRow";
import { motion } from "framer-motion";
import Input from "../common/Input";
import RadioGroup from "../common/Radio";
import SubLabelRow from "../common/SubLevelRow";


export const FirstTimers = () => {
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

         {/* MEMBERSHIP */}
        <FormRow
          label="Have you completed Membership Class?"
          required
        >
          <RadioGroup options={["Yes", "No"]} style="flex" />
        </FormRow>

        {/* GENDER */}
        <FormRow label="Gender" required>
          <RadioGroup options={["Male", "Female"]} style="flex-col"/>
        </FormRow>

        {/* ADDRESS */}
        <FormRow label="Address" required>
          <div className=" gap-4">
            <Input placeholder="" />
        
          </div>
          <SubLabelRow labels={["Street Address"]} />
        </FormRow>

        <FormRow label="" required>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="" />
            <Input placeholder="" />
          </div>
          <SubLabelRow labels={["State / Province / Region", "Country"]} />
        </FormRow>


 {/* Others*/}
        <div className="grid grid-cols-2 gap-4">

        <FormRow label="Are you born again?" required >
          <RadioGroup options={["Yes", "No","Not Sure"]} style="flex-col"/>
        </FormRow>
        <FormRow label="How did you Hear About us" required >
          <RadioGroup options={["Friend / Family", "Online Search","Others"]} style="flex-col"/>
        </FormRow>
        </div>

 {/* WOULD YOU LIKE SOMEONE TO CONTACT YOU */}
        <FormRow label="Would you Like Someone to Contact you?" required >
          <RadioGroup options={["Yes", "No"]} style="flex-col"/>
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