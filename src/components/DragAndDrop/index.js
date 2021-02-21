import React, { Component } from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";

import "./dnd.css";

const styles = {
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px 0",
  border: "1px solid red",
  backgroundColor: "white"
};

const DragHandle = sortableHandle(() => <span className="dragHandle">::</span>);

const SortableItem = sortableElement(({ value }) => (
  <li className="sample" style={styles}>
    <DragHandle />
    {value}
  </li>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

class DragAndDrop extends Component {
  state = {
    items: [
      { Item: "sathish1" },
      { Item: "sathish2" },
      { Item: "sathish3" },
      { Item: "sathish4" },
      { Item: "sathish5" },
      { Item: "sathish6" }
    ]
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
        {items.map((value, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            value={value.Item}
          />
        ))}
      </SortableContainer>
    );
  }
}

export default DragAndDrop;
