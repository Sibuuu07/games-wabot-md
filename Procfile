web: node . --autocleartmp --db 'mongodb+srv://arctix:arctix@cluster0.o3gpk.mongodb.net/ArctixBotMD?retryWrites=true&w=majority
worker1: npx pm2 start npm --node-args="--optimize_for_size --max_old_space_size=460" -- run db && npx pm2 logs
worker2: node . --autocleartmp --db 'mongodb+srv://arctix:arctix@cluster0.o3gpk.mongodb.net/ArctixBotMD?retryWrites=true&w=majority
