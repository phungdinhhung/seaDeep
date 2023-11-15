const Table = ({ data }) => {
    return (
      <table className="table table-dark table-bordered text-center">
        <tbody>
          <tr className="bg-dark">
      <th style={{width:"5%"}} scope="col">#</th>
      <th style={{width:"20%"}} scope="col">Name</th>
      <th style={{width:"25%"}} scope="col">Surname</th>
      <th style={{width:"35%"}} scope="col">Role</th>
      <th style={{width:"15%"}} scope="col">Select</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;