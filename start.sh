sh kill.sh
echo "old process killed"
nohup python3 FLUSK_git.py  --port $1 &
echo "new started at port 9600"
