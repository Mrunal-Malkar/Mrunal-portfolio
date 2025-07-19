import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FaRegCircleCheck } from "react-icons/fa6";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PlanTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Personal services" {...a11yProps(0)} />
          <Tab label="Starter shops" {...a11yProps(1)} />
          <Tab label="Standard shops" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* plan 1 */}
      <CustomTabPanel value={value} index={0}>
        <div className="w-fit h-full bg-[#517faa] p-8 rounded-4xl flex gap-y-6 flex-col items-center">
          <div className="text-center flex flex-col gap-1 justify-center items-center">
            <div className="text-center gap-y-3 flex justify-center items-center flex-col">
              <h1 className="text-2xl font-sans text-white">Personal</h1>
              <h2 className="text-5xl font-extrabold text-white">₹1499</h2>
            </div>
            <div className="w-28 border-[2px] rounded-[50%] border-white"></div>
          </div>
          <div className="flex justify-center align-middle gap-y-7 flex-col items-center text-white">
            <ul className="space-y-5 text-xl">
              <li className="flex items-center gap-x-1.5">
                <FaRegCircleCheck className="text-green-500"/>
                <p>
                All you info covered
                </p>
              </li>
              <li className="flex items-center gap-x-2">
                <FaRegCircleCheck className="text-green-500"/>
                <p>
                Customer can inquire or order via whatsapp
                </p>
              </li>
              <li className="flex items-center gap-x-2">
                <FaRegCircleCheck className="text-green-500 text-xl"/>
                <p>
                Customers can see your work,pricing and details online!
                </p>
              </li>
              <li className="flex items-center gap-x-2 text-xl">
                <FaRegCircleCheck className="text-green-500"/>
                <p>
                Basic inquiry form for your customers!
                </p>
              </li>
              <li className="flex items-center gap-x-2">
                <FaRegCircleCheck className="text-green-500"/>
                <p>
                Best for -photographers, freelancers, small businesses who wants to grow!
                </p>
                </li>
            </ul>
            <button className="px-4 py-2 bg-white shadow-black shadow-2xl rounded-xl text-[#517faa]">Select this plan</button>
          </div>
        </div>
      </CustomTabPanel>

      {/* plan 2 */}
      {/* <CustomTabPanel value={value} index={1}>
        
      </CustomTabPanel> */}

      {/* plan 3 */}
      {/* <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
}
