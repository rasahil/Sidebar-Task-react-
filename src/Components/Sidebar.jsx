import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function Sidebar({ isOpen }) {
  const [open, setOpen] = useState(0);
  const [innerOpen, setInnerOpen] = useState(0);
  const [innerOpen1, setInnerOpen1] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleInnerOpen = (value) => {
    setInnerOpen(innerOpen === value ? 0 : value);
  };
  const handleInnerOpen1 = (value) => {
    setInnerOpen1(innerOpen1 === value ? 0 : value);
  };

  return (
    <Card
      className={`h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Home
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <Link to="/">
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>
          </Link>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Accordion
                open={innerOpen === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      innerOpen === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <Link to="analytics">
                  <ListItem className="p-0">
                    <AccordionHeader
                      onClick={() => handleInnerOpen(1)}
                      className="border-b-0 p-3"
                    >
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <Typography
                        color="blue-gray"
                        className="mr-auto font-normal"
                      >
                        Analytics
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                </Link>
                <AccordionBody className="py-1 ps-4">
                  <List className="p-0">
                    <Link to="/analytics/analytics1">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Analytics 1
                      </ListItem>
                    </Link>
                    <Link to="/analytics/analytics2">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Analytics 2
                      </ListItem>
                    </Link>
                    <Link to="/analytics/analytics3">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Analytics 3
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link to="/reporting">Reporting</Link>
              </ListItem>
              <Accordion
                open={innerOpen1 === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      innerOpen1 === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <Link to="projects">
                  <ListItem className="p-0">
                    <AccordionHeader
                      onClick={() => handleInnerOpen1(1)}
                      className="border-b-0 p-3"
                    >
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <Typography
                        color="blue-gray"
                        className="mr-auto font-normal"
                      >
                        Projects
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                </Link>
                <AccordionBody className="py-1 ps-4">
                  <List className="p-0">
                    <Link to="/projects/project1">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Project 1
                      </ListItem>
                    </Link>
                    <Link to="/projects/project2">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Project 2
                      </ListItem>
                    </Link>
                    <Link to="/projects/project3">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Project 3
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>
            </List>
          </AccordionBody>
        </Accordion>
        <Link to="/starred">
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Starred
          </ListItem>
        </Link>
        <Link to="/drafts">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Drafts
          </ListItem>
        </Link>
        <Link to="/settings">
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
        </Link>
        <Link to="/logout">
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}
