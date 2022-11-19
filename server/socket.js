import { Server } from "socket.io";
import logger from "./utils/logger";

export let io = null;

export const init = (server) => {
	io = new Server(server, {
		path: "/api/socket.io",
	});

	io.on("connection", (socket) => {
		logger.info("got a socket connection");
		socket.on("laptop_request:register", ({ laptopRequestId }) => {
			socket.join("laptop_request:" + laptopRequestId);
			logger.info("a socket registered for: laptop_request:" + laptopRequestId);
		});
	});
};
