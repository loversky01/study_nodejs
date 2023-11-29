'use strict';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;

// Đếm số kết nối
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Số kết nối: ${numConnection}`);
};

// Kiểm tra quá tải
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        // Ví dụ: số kết nối tối đa dựa trên số lõi CPU
        const maxConnections = numCores * 5;

        console.log(`Số kết nối hoạt động: ${numConnection}`);
        console.log(`Sử dụng bộ nhớ: ${memoryUsage / (1024 * 1024)} MB`);

        if (numConnection > maxConnections) {
            console.log(`Phát hiện quá tải kết nối`);
        }

    }, _SECONDS); // Theo dõi mỗi 5 giây
};

module.exports = {
    countConnect,
    checkOverload
};
