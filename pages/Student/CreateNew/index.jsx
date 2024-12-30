import React, { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Box,
  Grid2,
  Typography,
  TextField,
  Button,
  styled,
  InputLabel,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";

import SelectField from "@components/Elements/Select";
import { DashboardLayout } from "@components/Global/Layout";
import { createStudent } from "@api/students";

const gradeOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
];

const sectionOptions = [
  { value: "a", label: "A" },
  { value: "b", label: "B" },
  { value: "c", label: "C" },
];

const subjectOptions = [
  { value: "math", label: "Math" },
  { value: "science", label: "Science" },
  { value: "history", label: "History" },
  { value: "english", label: "English" },
];

const Form = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const CreateNewStudent = () => {
  const [gender, setGender] = useState("");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   // Combine grade and section into a new field
  //   const combinedGradeSection = `${data.grade}-${data.section}`;

  //   // Remove individual grade and section fields
  //   delete data.grade;
  //   delete data.section;

  //   // Add the combined field
  //   data.combinedGradeSection = combinedGradeSection;

  //   // Add gender if available
  //   if (gender) {
  //     data.gender = gender;
  //   }

  //   try {
  //     const response = await createStudent(data);
  //     console.log("Student created:", response);
  //     alert("Student created successfully!");
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("Failed to create student.");
  //   }
  // };

  return (
    <DashboardLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flexGrow: 1,
        }}
      >
        <Typography variant="h4" sx={{ mb: 5 }}>
          Create new student
        </Typography>
        <Form handleSubmit={handleSubmit(onSubmit)}>
          <Grid2 container spacing={5}>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <TextField
                label="Student Name"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <TextField
                label="Parent Name"
                {...register("parentName")}
                error={!!errors.parentName}
                helperText={errors.parentName?.message}
                fullWidth
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Box>
                <InputLabel {...register("dateOfBirth")}>
                  Date of Birth
                </InputLabel>
                <Controller
                  name="dateOfBirth"
                  control={control}
                  rules={{ required: "Date of Birth is required" }}
                  render={({ field, fieldState }) => (
                    <DatePicker
                      {...field}
                      onChange={(newValue) => field.onChange(newValue)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!fieldState.error,
                          helperText: fieldState.error?.message,
                        },
                      }}
                    />
                  )}
                />
              </Box>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Box>
                <InputLabel>Grade</InputLabel>
                <Controller
                  name="grade"
                  control={control}
                  rules={{ required: "Grade is required" }}
                  render={({ field }) => (
                    <SelectField
                      {...field}
                      options={gradeOptions}
                      error={!!errors.grade}
                      helperText={errors.grade?.message}
                      fullWidth
                    />
                  )}
                />
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Box>
                <InputLabel>Section</InputLabel>
                <Controller
                  name="section"
                  control={control}
                  rules={{ required: "Section is required" }}
                  render={({ field }) => (
                    <SelectField
                      {...field}
                      options={sectionOptions}
                      error={!!errors.grade}
                      helperText={errors.grade?.message}
                      fullWidth
                    />
                  )}
                />
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <TextField
                label="Mobile Number"
                {...register("mobile")}
                error={!!errors.mobile}
                helperText={errors.mobile?.message}
                fullWidth
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Box>
                <InputLabel>Gender</InputLabel>

                <ToggleButtonGroup
                  value={gender}
                  exclusive
                  onChange={(event, newGender) => setGender(newGender)}
                  fullWidth
                >
                  <ToggleButton value="male">Male</ToggleButton>
                  <ToggleButton value="female">Female</ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <Box>
                <InputLabel>Subjects</InputLabel>
                <Controller
                  name="subjects"
                  control={control}
                  render={({ field }) => (
                    <SelectField
                      {...field}
                      options={subjectOptions}
                      isMulti
                      placeholder="Select subjects"
                      value={subjectOptions.filter((option) =>
                        field.value?.includes(option.value)
                      )}
                      onChange={(selectedOptions) =>
                        field.onChange(
                          selectedOptions.map((option) => option.value)
                        )
                      }
                      fullWidth
                    />
                  )}
                />

                {errors.subjects && (
                  <FormHelperText>{errors.subjects.message}</FormHelperText>
                )}
              </Box>
            </Grid2>
          </Grid2>
          <Box
            sx={{
              display: "flex",
              gap: 5,
              mt: "auto",
              pt: 5,
              justifyContent: "flex-end",
            }}
          >
            <Button variant="outlined" size="large">
              Cancel
            </Button>
            <Button variant="contained" size="large" type="submit">
              Add Student
            </Button>
          </Box>
        </Form>
      </Box>
    </DashboardLayout>
  );
};
