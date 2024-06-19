/* eslint-disable react/prop-types */
import { useDrop } from 'react-dnd';

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
        className=" w-56  rounded"
        // style={{
        //   backgroundColor: isOver ? 'lightgreen' : 'bg-div4Color',
        // }}
      >
         
        <div className="h-14 bg-gradient-to-t from-forGradientColor to-forGradientColor2 p-5 w-64  text-textColor  font-inter text-sm ">
          {isOver ? 'Release to save' : 'Drop a book here'}
        </div>
      </div>
    );
  };

  export default DroppableArea