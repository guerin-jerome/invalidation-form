export const BirthForm = () => (
  <>
    <h2>Birth informations</h2>
    <form>
      <label>
        Date
        <input type="date" name="birthDate" />
      </label>

      <label>
        City
        <select>
          <option value="paris">Paris</option>
          <option value="marseille">Marseille</option>
          <option value="lyon">Lyon</option>
        </select>
      </label>

      <button type="submit">Validate</button>
    </form>
  </>
);
