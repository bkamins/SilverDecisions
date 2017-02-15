/* object representing a uniquely identifiable job run. JobInstance can be restarted multiple times in case of execution failure and it's lifecycle ends with first successful execution*/
export class JobInstance{

    instanceId;
    jobName;

}
