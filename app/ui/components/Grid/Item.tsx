import React from "react";

interface IProps {
  item: any;
  onClick: (id: number) => void;
}

const Item: React.FC<IProps> = ({ item, onClick }) => {
  return (
    <tr
      onClick={() => onClick(item.id)}
      className="cursor-pointer bg-background-500 border-b transition ease-in-out hover:bg-gray-800 mb-8"
    >
      {item &&
        Object.values(item).map(
          (val: any, i) =>
            i !== 0 && (
              <td key={i} className="px-6 py-4">
                {val}
              </td>
            )
        )}
    </tr>
  );
};

export default Item;
