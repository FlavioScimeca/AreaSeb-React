/* 
        <div>
          <p className=" self-center text-center font-semibold"> {data.l} </p>
          <p>
            Type <span>{data.q}</span>
          </p>
          <p>{data.y}</p>
        </div>
        <div>
          <span>Actors:</span>
          <ul>
            {data.s.split(',').map((actor, idx) => (
              <li key={idx}>{actor}</li>
            ))}
          </ul>
        </div>
*/
