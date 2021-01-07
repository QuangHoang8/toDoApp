import classes from "./Tasks.module.css";
function Task({ id, jobContent }) {
  return (
    <div className={classes.list}>
      <div className={classes.listItems}>
        <div className={classes.checkboxFour}>
          <input
            type="checkbox"
            defaultValue={1}
            id={id}
            className={classes.checkboxFourInput}
          />
          <label className={classes.checkboxFourlabel} htmlFor={id} />
        </div>
        <div className={classes.content}>{jobContent}</div>
      </div>
      <div className={classes.star}>
        <img src="./img/star.svg" className={classes.imgStar} alt="star" />
      </div>
    </div>
  );
}
export default Task;
