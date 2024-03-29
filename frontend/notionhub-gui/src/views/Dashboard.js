import React, { useState, useEffect } from 'react'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import InfoCard from '../components/Cards/InfoCard'
import response from '../utils/demo/tableData'
import axios from 'axios';
import PageTitle from '../components/Typography/PageTitle'

import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'
import { Link } from 'react-router-dom';


function ProjectsList() {

    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    // pagination setup
    const resultsPerPage = 10
    //const totalResults = response.length

    // pagination change control
      function onPageChange(p) {
        setPage(p)
      }
    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
         axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
            setData(res.data)
            // for test porpuse
            // console.log(res.data)
        })
    }, [page])

    // for test porpuse
    // console.log(data)

    return (
        <>

        {/* <!-- Title --> */}
        <PageTitle>Dashboard</PageTitle>


        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">

        {/* <!-- Cards --> */}
        {
            <InfoCard title="Total Projects" value={data.length}>
              <RoundIcon
                icon={PeopleIcon}
                iconColorClass="text-orange-500 dark:text-orange-100"
                bgColorClass="bg-orange-100 dark:bg-orange-500"
                className="mr-4"
              />
            </InfoCard>
        }

        <InfoCard title="Active Projects" value="3">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Projects passed builds" value="63">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Contributors" value="35">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      {/* <!-- Table --> */}
      <TableContainer className="mb-8">
        <Table>

          {/* <!-- Table Header Columns --> */}
          <TableHeader>

            <tr>
              <TableCell>Project</TableCell>
              <TableCell>Contributors</TableCell>
              <TableCell>ToDo's</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Build Status</TableCell>
              <TableCell>Start Date</TableCell>
            </tr>

          </TableHeader>

          {/* <!-- Table Body Rows from Backend --> */}
          <TableBody>
            {
                data.map((user, i) => (
                    <TableRow key={i}>

                        {/* <!-- Cell for Project Name & Title --> */}
                        <TableCell>

                        {/* <!-- Link to Project Detail View --> */}
                        <Link to ="/app/real-dashboard">

                              <div className="flex items-center text-sm">
                                <div>
                                  <p className="font-semibold">{user.title}</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">{user.title}</p>
                                </div>
                              </div>

                          </Link>
                        </TableCell>

                        {/* <!-- Cell for Project Contributors --> */}
                        <TableCell>
                              <span className="text-sm">40</span>
                        </TableCell>


                        {/* <!-- Cell for Project ToDo's --> */}
                        <TableCell>
                              <Badge type="neutral">14 ToDo's</Badge>
                        </TableCell>

                        {/* <!-- Cell for Project Status --> */}
                        <TableCell>
                              <Badge type="success">active</Badge>
                        </TableCell>

                        {/* <!-- Cell for Project Build Status --> */}
                        <TableCell>
                              <Badge type="danger">failed</Badge>
                        </TableCell>

                        {/* <!-- Cell for Project Start Date --> */}
                        <TableCell>
                              <span className="text-sm">{new Date().toLocaleDateString()}</span>
                        </TableCell>

                    </TableRow>
                ))
            }
          </TableBody>
        </Table>

        <TableFooter>
          <Pagination
            totalResults={data.length}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>


        </>
    )

}

export default ProjectsList;
