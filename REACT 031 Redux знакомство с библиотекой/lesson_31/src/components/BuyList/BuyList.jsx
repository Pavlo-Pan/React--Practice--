import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { addItemByList, deleteItemByList } from '../../redux/actionsCreators';

import BuyListForm from './BuyListForm/BuyListForm';
import List from './List/List';

import styles from './BuyList.module.css';

const BuyList = () => {

    const items = useSelector(store => store.buyList);
    const dispatch = useDispatch();

    const addItem = newItem => {
        const action = addItemByList(newItem);
        dispatch(action);
    }

    const deleteItem = id => {
        dispatch(deleteItemByList(id))
    }

    return (
        <main>
            <section className={styles.container}>
                <div className={styles.block}>
                    <BuyListForm submitForm={addItem} />
                </div>
                <div className={styles.block}>
                    <List items={items} deleteItem={deleteItem}/>
                </div>
            </section>
        </main>
    )
};

export default BuyList;