import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AskAi from '../Ask Ai/AskAi';

const CustomTabs = () => {
  return (
    <Tabs>
      <TabList className="flex gap-40 mt-40 text-customTextColor font-normal font-inter cursor-pointer text-sm border-b border-customTextColor">
        <Tab id='tab'>Description </Tab>
        <Tab id='tab'>Ask AI</Tab>
        <Tab className={'ml-20'}> Review</Tab>
      </TabList>
      <TabPanel>
        <div>hhh</div>
      </TabPanel>
      <TabPanel>
        <div >
            <AskAi/>
        </div>
      </TabPanel>
      <TabPanel>
        <div>bad</div>
      </TabPanel>
    </Tabs>
  );
};

export default CustomTabs;
