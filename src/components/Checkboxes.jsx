import PropTypes from "prop-types"; 


function Checkboxes({selectedActivities, handleChange }){
    return (
        <ul>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="swimming"
        checked={selectedActivities.includes("swimming")}
        onChange={handleChange}
      />Swimming</label
    >
  </li>
  <li>
    <label
      ><input name="spend-time" type="checkbox" value="bathing"  checked={selectedActivities.includes("bathing")}
      onChange={handleChange}/>Bathing</label
    >
  </li>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="chatting"
        checked={selectedActivities.includes("chatting")}
        onChange={handleChange}
      />Chatting</label
    >
  </li>
  <li>
    <label
      ><input name="spend-time" type="checkbox" value="noTime"  checked={selectedActivities.includes("noTime")}
      onChange={handleChange}/>I don&apos;t like to
      spend time with it</label
    >
  </li>
</ul>


    );
}

Checkboxes.propTypes = {
  selectedActivities: PropTypes.array.isRequired, // `selectedActivities` må være en array
  handleChange: PropTypes.func.isRequired, // `handleChange` må være en funksjon
};
export default Checkboxes;
