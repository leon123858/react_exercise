import Head from 'next/head';
import TodoList from '../component/todoList';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>TodoList</h1>
				<TodoList />
			</main>

			<footer>
				<p>test template</p>
			</footer>
		</div>
	);
}
