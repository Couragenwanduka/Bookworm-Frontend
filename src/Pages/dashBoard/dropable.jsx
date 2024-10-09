import { useDrop } from 'react-dnd';
import Rectangle from '../../Images/Icons/Rectangle 46.svg'

const ItemType = 'ITEM';

const DroppableArea = ({ onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: ItemType,
      drop: (item) => onDrop(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));

    return (
      <div
        ref={drop}
        className=" w-full  rounded"
        // style={{
        //   backgroundColor: isOver ? 'lightgreen' : 'bg-div4Color',
        // }}
      >
         
         <div className="w-[110%] text-white font-inter text-sm relative">
          <img src={Rectangle} className="w-[100%]" />
          <h1 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-opacity-40 ">
            {isOver ? 'Release to save' : 'Drop a book here'}
          </h1>
        </div>
      </div>
    );
  };

  export default DroppableArea