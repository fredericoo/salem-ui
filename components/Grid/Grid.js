import styles from "./Grid.module.scss";

const Grid = ({ gutter = "2rem", container, children, className }) => {
	return (
		<div
			className={`${className} ${styles.grid} ${
				container ? styles.container : ""
			}`}
			style={{ "--gutter": gutter }}
		>
			{children}
		</div>
	);
};

const Col = ({
	children,
	className,
	sm = "grid-start / grid-end",
	md,
	lg,
	xl,
	rowSm = "auto",
	rowMd,
	rowLg,
	rowXl,
}) => {
	const style = {
		"--colSm": sm,
		"--colMd": md,
		"--colLg": lg,
		"--colXl": xl,
		"--rowSm": rowSm,
		"--rowMd": rowMd,
		"--rowLg": rowLg,
		"--rowXl": rowXl,
	};

	if (Array.isArray(children) || typeof children === "string") {
		return (
			<div className={`${className} ${styles.col}`} style={style}>
				{children}
			</div>
		);
	} else {
		console.log(children);
		return (
			<children.type
				{...children.props}
				className={`${className} ${styles.col} ${
					children.props.className ? children.props.className : ""
				}`}
				style={style}
			/>
		);
	}
};

Grid.Col = Col;
export default Grid;
