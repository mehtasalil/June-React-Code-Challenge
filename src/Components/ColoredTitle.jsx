import { Title } from "@ui5/webcomponents-react";
import { createUseStyles } from "react-jss";
import { getColorFromString } from "../utils/utils";

export function ColoredTitle({ title }) {
  const classes = useStyles({ title });

  return (
    <>
      <Title className={classes.title}>{title}</Title>
    </>
  );
}

const styles = {
  title: {
    color: (props) => getColorFromString(props.title),
  },
};

const useStyles = createUseStyles(styles);
