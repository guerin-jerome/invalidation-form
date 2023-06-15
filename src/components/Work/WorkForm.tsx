export const WorkForm = () => (
  <>
    <h2>Work informations</h2>
    <form>
      <label>
        Denomination
        <input type="text" name="denomination" />
      </label>

      <label>
        Details
        <textarea name="details" rows={5} cols={33} />
      </label>

      <button type="submit">Validate</button>
    </form>
  </>
);
