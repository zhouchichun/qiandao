ps -ef | grep FLUSK_git |grep -v 'grep' | awk '{print $2}' | xargs kill -9
echo "old process killed"
#python manage.py runserver $1 &
#echo "new started"
