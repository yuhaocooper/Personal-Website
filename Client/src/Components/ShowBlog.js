import React from "react";
import ToText from "../utils/ToText.js";
import dayjs from "dayjs"
import {Link} from "react-router-dom";

function ShowBlog(props) {
 
  return (
    <div className='grid'>
      <div className='cardsmall'>
        <div
          className='cardpost__image'
          style={{ backgroundImage: `url(${props.thumbnail})` }}
        >

          <div className='authorimg'>
            <a
              href={props.profileurl}
              target="_self"
              style={{ backgroundImage: `url(${props.avtar})` }}
            >
            </a>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">
            
            <a
              href={props.guid}
              target="_self"
              className='textfiordblue'
            >
              {props.title}
            </a>
          </h5>

          <p className='cardText'>{`${ToText(
            props.description.substring(0, 1000)
          )}...`}</p>
          <br />

          <span className="text-dark">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"

              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              ></path>
            </svg>
            {props.author}
          </span>

          <br />
          <span className="text-muted">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="calendar-alt"

              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
            {dayjs(props.pubDate).add(8, 'h').format("MMM DD, YYYY hh:mm A")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ShowBlog;