import React from "react";
import { Card } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../app/taskSlice";
import { Button } from "semantic-ui-react";

function Task({ card }) {
  const dispatch = useDispatch();
  const change = (id)=>{
   dispatch(toggleTask(id))
  
  }
  const remove = (id) => {
    dispatch(removeTask(id));
  };  
  return (
    <div>
      <Card className="cc">
        <Card.Content className="cards">
          <Card.Header className="title">{card.description}</Card.Header>
          {card.isDone ? (
            <FontAwesomeIcon
              icon={faCheck}
              size="xl"
              style={{ color: "#1f5127" }}
            />
          ) : (
            <Button className="btn" onClick={() => change(card.id)}>
              not finished
            </Button>
          )}

          <Button className="btn2" onClick={() => remove(card.id)}>
            Rmove
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Task;
