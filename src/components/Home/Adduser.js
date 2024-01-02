import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
export default function Adduser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleAdduser = async (data) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      console.log("adduser", data);

      let newdata = {
        id: Math.floor(Math.random() * 100),
        ...data,
      };

      console.log("newdata", newdata);
      let response = await axios.post(
        `${process.env.REACT_APP_URL}/workers
        `,
        newdata,
        {
          headers: headers,
        }
      );
      console.log("add new user", response);
    } catch (error) {
      console.log("add user data error", error);
    }
  };
  return (
    <>
      <form className="mb-5" onSubmit={handleSubmit(handleAdduser)}>
        <div class="row mb-4">
          <div class="col-md-4">
            <label className="mr-2">Name :</label>
            <input type="text" placeholder="Enter Name" {...register("name")} />
          </div>
          <div class="col-md-4">
            <label className="mr-2">Email :</label>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email")}
            />
          </div>
          <div class="col-md-4">
            <label className="mr-2">Location :</label>
            <input
              type="text"
              placeholder="Enter Location"
              {...register("location")}
            />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-4">
            <label className="mr-2">company :</label>
            <input
              type="text"
              placeholder="Enter Company"
              {...register("company")}
            />
          </div>
          <div class="col-md-4">
            <label className="mr-2">Role :</label>
            <input type="text" placeholder="Enter Role" {...register("role")} />
          </div>
          <div class="col-md-4">
            <label className="mr-2">Phone :</label>
            <input
              type="text"
              placeholder="Enter Phone"
              {...register("phone")}
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
