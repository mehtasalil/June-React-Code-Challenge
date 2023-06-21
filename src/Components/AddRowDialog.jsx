import {
  Bar,
  Button,
  ButtonDesign,
  Dialog,
  Form,
  FormItem,
  Input,
  Option,
  Select,
} from "@ui5/webcomponents-react";
import { useState } from "react";

const options = [
  { id: 1, status: 'Not Started' },
  { id: 2, status: 'In Progress' },
  { id: 3, status: 'Completed' },
  { id: 4, status: 'Blocked' }
];

/**
 * AddRowDialog is a dialog component with a button. When the button is clicked,
 * a dialog will open with two fields, a title field that takes in a string, and a 
 * status select field that allows 4 statuses, "Completed", "In Progress", 
 * "Not Started", and "Blocked". 
 * @param {obj} obj wrapping object around props
 * @param {function} obj.addNewRow function prop that sends back an object with a title 
 * and status, both strings. {title: "", status: ""}
 */
function AddRowDialog({ addNewRow }) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [formData, setFormData] = useState({title: "", status: "Not Started"})
  
  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      title: event.target.value
    }));
  }
  
  const handleSelectChange = (event) => {
    const selectedOptionId = event.detail.selectedOption.dataset.id;
    const selectedOptionText = options.find((option) => option.id === parseInt(selectedOptionId)).status;
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      status: selectedOptionText
    }));
  }

  const handleAddRow = () => {
    setDialogIsOpen(false);
    addNewRow(formData);
    setFormData({title: "", status: "Not Started"});
  };

  return (
    <>
      <Button
        onClick={() => {
          setDialogIsOpen(true);
        }}
        icon="add"
        design={ButtonDesign.Transparent}
      />
      <Dialog
        open={dialogIsOpen}
        headerText="Add New Row"
        footer={<Bar
            design="Footer"
            endContent={
              <>
                <Button onClick={() => setDialogIsOpen(false)}>Close</Button>
                <Button onClick={handleAddRow}>Add</Button>
              </>
            }
          />
        }
      >
       <Form>
          <FormItem label="Title">
            <Input value={formData.title} onInput={handleInputChange}/>
          </FormItem>
          <FormItem label="Status">
            <Select onChange={handleSelectChange}>
              {options.map((item) => (
                <Option selected={item.status === formData.status} key={item.id} data-id={item.id}>
                  {item.status}
                </Option>
              ))}
            </Select>
          </FormItem>
        </Form>
      </Dialog>
    </>
  );
}

export default AddRowDialog;