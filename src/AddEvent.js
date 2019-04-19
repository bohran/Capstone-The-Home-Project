// /AddEvent route takes you here

const STAGE = {
    ORGANIZATION: 0,
    EVENT_DETAILS: 1,
}

class AddEvent {
    state = {
        currentStage: STAGE.ORGANIATION,
        formEntries: {
            name: "",
            category: "",
        }
    }
render() {
    if (currentStage == ORGANIATION) {
        return <AddOrganizationForm form={this.state.formEntries} onFormUpdate={this.handleFormUpdate} />;
    } else if (DETAILS) {
        return <AddEventForm form={this.state.formEntries} />
    }
    <Button onClick={this.setState( { currentStage: STAGE.EVENT_DETAILS })}> next</Button>
}
}