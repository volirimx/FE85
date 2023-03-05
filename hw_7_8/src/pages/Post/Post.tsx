import React, { useState } from "react";
import { SelectedPost } from "../../components/SelectedPost/SelectedPost";
import { IDataProps } from "../../components/types";
import { useAppSelector } from "../../redux/hooks";
import PageTemplate from "../PageTemplate/PageTemplate";

export const Post = ({ card } :IDataProps ) => {

  return (
    <PageTemplate title={"Post"} linkName={""}>
      <SelectedPost 
        id={card[0].id} 
        image={card[0].image} 
        text={card[0].text} 
        date={card[0].date} 
        title={card[0].title} 
        description={card[0].description} 
        author={card[0].author} />
    </PageTemplate>
  );
};
