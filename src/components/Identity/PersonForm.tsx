export const PersonForm = () => (
  <>
    <h2>Person informations</h2>
    <form>
      <label>
        First Name
        <input type="text" name="firstName" />
      </label>

      <label>
        Last Name
        <input type="text" name="lastName" />
      </label>

      <button type="submit">Validate</button>
    </form>
  </>
);
