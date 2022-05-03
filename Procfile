web: node . --server
worker: npx pm2 start npm --node-args="--optimize_for_size --max_old_space_size=460" -- run db && npx pm2 logs
worker: node . --autocleartmp --db 'mongodb+srv://arctix:arctix@cluster0.o3gpk.mongodb.net/ArctixBotMD?retryWrites=true&w=majority
