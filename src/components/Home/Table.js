import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
export default function Tablecard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [viewdata, setViewdata] = useState();
  // const []

  console.log("process.env.REACT_APP_URL", process.env.REACT_APP_URL);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        `${process.env.REACT_APP_URL}/workers
        `
      );
      // ?_sort=id&_order=desc
      // ?firstName_like=te
      //   console.log("response", response);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("Users", users);
  console.log("visible", visible);
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col"></th>

            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        {loading ? (
          <tbody>
            <tr>
              <td colSpan={5}>
                <div
                  style={{
                    height: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Loading...
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {users &&
              users.map((data, index) => (
                <>
                  <tr key={data.id}>
                    <td>
                      {
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setViewdata(data);
                            setVisible(!visible);
                          }}
                        >
                          {viewdata?.id == data?.id && visible ? (
                            <FaAngleDown />
                          ) : (
                            <FaAngleRight />
                          )}
                        </span>
                      }
                    </td>
                    <td scope="row">{index + 1}</td>

                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.location}</td>
                  </tr>
                  {viewdata?.id == data?.id && visible && (
                    <tr>
                      <td></td>
                      <td></td>

                      <td>Company: {data.company}</td>
                      <td>Role: {data.role}</td>
                      <td>Phone: {data.phone}</td>
                    </tr>
                  )}
                </>
              ))}
          </tbody>
        )}
      </table>
    </>
  );
}
