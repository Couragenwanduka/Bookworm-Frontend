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
        <div className='text-customTextColor mt-5 mb-32'>
        A book is a collection of written, printed, or digitally presented material, often bound together within covers. 
        Books serve as mediums for recording information, telling stories, sharing knowledge, and expressing ideas. 
        They come in various formats, including physical print, e-books, and audiobooks, making them accessible to diverse audiences. 
        Whether fiction or non-fiction, textbooks or reference materials, books play a crucial role in education, entertainment, and 
        cultural preservation. They can cover an infinite range of topics and genres, catering to readers of all ages and interests.
        </div>
      </TabPanel>
      <TabPanel>
        <div >
            <AskAi/>
        </div>
      </TabPanel>
      <TabPanel>
        <div className='text-customTextColor mt-20 ml-56'>No Reviews yet</div>
      </TabPanel>
    </Tabs>
  );
};

export default CustomTabs;
