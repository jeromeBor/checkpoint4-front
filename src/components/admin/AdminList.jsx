import React from "react";
import { Link } from "react-router-dom";

import { Button, Table, Nav } from "react-bootstrap";
import { formatDateSimple } from "../../utils/formatDate";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';


const AdminList = ({ searchValue, items, handleShow, listHeader }) => {
  return (
    <>
      <Table striped borderless size="sm" >
        <thead >
          <tr >
            {listHeader && listHeader.map((header) => <th key={header}
            >{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {items &&
            items
              .filter(
                (item) =>
                  item.title.toLowerCase().includes(searchValue) ||
                  item.tagsId === parseInt(searchValue)
              )
              .map((item) => (
                <tr
                  key={item.id}
                >
                  <td>{item.id ? item.id : null}</td>
                  <td>{item.title ? item.title : null}</td>
                  <td>
                    {item.dateOfWrite
                      ? formatDateSimple(item.dateOfWrite)
                      : null}
                  </td>
                  <td>{item.tagsId ? item.tagsId : null}</td>
                  <td className="d-flex justify-content-end align-items-center">
                    <Button size="sm" variant="warning">
                      <Link
                        to={`/admin/update-drawing/${item.id}`}
                        className="text-white"
                      >
                        <AiOutlineEdit style={{ fontSize: '20px' }} />

                        Editer
                      </Link>
                    </Button>
                    <Button
                      data-id={item.id}
                      data-name={item.title}
                      onClick={handleShow}
                      className="m-1"
                      size="sm"
                      variant="danger"
                    >
                      <AiOutlineDelete style={{ fontSize: '20px' }} />
                      Supprimer
                    </Button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default AdminList;
