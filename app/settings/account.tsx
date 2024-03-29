import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import { Card, FileInput } from "../../components";
import { useAuth } from "../../context";

import { API_BASE_URL } from "../../utils/constants";

const initialFormData = {
  display_name: "",
  contact_name: "",
  contact_email: "",
  industry: "",
  company_logo: "",
};

const industries = [
  "Healthcare and Pharmaceuticals",
  "Information Technology (IT) and Software Services",
  "Finance and Banking",
  "Retail and Consumer Goods",
  "Manufacturing and Industrial Production",
];

const Account = () => {
  const { accessToken } = useAuth();

  const [formData, setFormData] = useState({ ...initialFormData });
  const { display_name, contact_name, contact_email, industry, company_logo } =
    formData;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
  };

  const fetchOrg = async () => {
    const orgResponse = await axios.get(
      `${API_BASE_URL}/org_management/get_org_data`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const { display_name, profile } = orgResponse.data || {};
    const { contact_name, contact_email, industry, company_logo } =
      profile || {};

    setFormData({
      display_name,
      contact_name,
      contact_email,
      industry,
      company_logo,
    });
  };

  useEffect(() => {
    accessToken && fetchOrg();
  }, [accessToken]);

  return (
    <Card title="Account">
      <Box maxW="466px">
        <FormControl mb="20px">
          <FormLabel variant="custom">Company name</FormLabel>
          <Input
            value={display_name}
            name="display_name"
            onChange={handleOnChange}
            readOnly
          />
        </FormControl>
        <FormControl mb="20px">
          <FormLabel variant="custom">Contact name</FormLabel>
          <Input
            value={contact_name}
            name="contact_name"
            onChange={handleOnChange}
            readOnly
          />
        </FormControl>
        <FormControl mb="20px">
          <FormLabel variant="custom">Email</FormLabel>
          <Input
            type="email"
            value={contact_email}
            name="contact_email"
            onChange={handleOnChange}
            readOnly
          />
        </FormControl>
        <FormControl mb="20px">
          <FormLabel variant="custom">Industry</FormLabel>
          <Select
            name="industry"
            onChange={handleOnChange}
            value={industry}
            isReadOnly
          >
            {industries.map((option, index) => (
              <option key={`industry-${index}`}>{option}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel variant="custom">Company Logo</FormLabel>
          <FileInput />
        </FormControl>
      </Box>

      <Button mt="24px" variant="custom" onClick={submit}>
        Save changes
      </Button>
    </Card>
  );
};

export default Account;
