import React, { Component } from "react";
import { connect } from "react-redux";
import CreateBoard from "./CreateBoard";

const mapStateToProps = ({ createBoard}) => {
    return { isCreateBoardOpened: createBoard.isCreateBoardOpened };
};

const CreateBoardContainer = ({ isCreateBoardOpened }) => (
    <div> {isCreateBoardOpened ? "create" : <CreateBoard></CreateBoard> }  </div>
);

export default connect(mapStateToProps)(CreateBoardContainer);
