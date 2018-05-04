import React from "react";
import { connect } from "react-redux";
import { createNewBoard } from "../../Actions/createNewBoard";


const CreateBoard = ({ createNewBoard }) => (
    <div onClick={() => createNewBoard()}>Create a new board</div>
)


export default connect(null, { createNewBoard })(CreateBoard);
