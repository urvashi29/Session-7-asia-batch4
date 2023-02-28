import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { onDeleteEmp } from "../../action";

export default function CardDisplay({ employeData }) {
  console.log(employeData);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(onDeleteEmp(id));
  };

  const employeList = employeData.length ? (
    employeData.map((emp) => {
      return (
        <React.Fragment>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {emp.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Welcome
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleDelete(emp.id)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        </React.Fragment>
      );
    })
  ) : (
    <></>
  );

  return <>{employeList}</>;
}
