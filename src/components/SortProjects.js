import React, { Component } from "react";
import firebase from 'firebase'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 400,
  margin: '20px auto'
});

export class SortProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    let projects = []
    firebase.database().ref('projects/').orderByChild('orderBy').on('child_added', (data) => {
        let completeData = data.val()
        completeData.projectKey = data.key
        projects.push(completeData)
        this.setState({
            items: projects
        })
    })
}

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  handleOrderByChange = () => {
    this.state.items.forEach((item, i) => {
        firebase.database().ref(`projects/${item.projectKey}`).update({
            orderBy: i
        })
    })
    this.handleSuccess()
  }

  handleSuccess = () => {
    toast.success("Projects Reordered Successfully!")
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
        <div style={{ margin: '10px auto'}} >
            <h3>Reorder Projects</h3>
            <h6>Top of Page</h6>
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.projectKey} draggableId={item.projectKey} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.projectTitle}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <h6>Bottom of Page</h6><br />
      <Button block onClick={this.handleOrderByChange} style={{borderRadius: '0', margin: '0 auto', maxWidth: '400px' }} variant='primary'>Update Project Order</Button>
      </div>
    );
  }
}