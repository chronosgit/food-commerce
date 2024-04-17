import Category from "@common/components/category/Category";
import styles from "./categories.module.css";

const Categories = ({categories: cats}) => {

  if(!cats || !cats.length) {
    return;
  }

  return (
    <div className={styles.categories}>
      {
        cats.map(cat => <Category key={cat.id} category={cat} />)
      }
    </div>
  );
};

export default Categories;