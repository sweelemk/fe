import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import TeacherRecord from "../../records/teacher-record";

class TeachersPage extends PureComponent {
    static propTypes = {
        isTeachersLoading: PropTypes.bool.isRequired,
        teachersList: ImmutablePropTypes.listOf(PropTypes.instanceOf(TeacherRecord)).isRequired,
        onStartPage: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const {onStartPage} =this.props;

        onStartPage();
    }


    render() {
        const {isTeachersLoading, teachersList} = this.props;
        return(
            <Fragment>
                <h1>Teachers page</h1>
                {isTeachersLoading && <div>loading</div>}
                {!isTeachersLoading &&
                    <Fragment>
                        <div>loaded</div>
                        {
                            teachersList.count() ? <ul>
                                {
                                    teachersList.map((t) => (
                                        <li key={t.get('id')}>name: {t.get('user')}, email: {t.get('email')}</li>
                                    ))
                                }
                            </ul>
                                :
                                <div>Sorry, no results!</div>
                        }
                    </Fragment>
                }
            </Fragment>
        )
    }
}

export default TeachersPage;
